import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';
import { BufferedFile } from '../minio-client/file.model';
import { Response } from 'express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UploadFileResponse } from './response-file';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('File Upload')
@Controller('file-upload')
export class FileUploadController {
  constructor(private fileUploadService: FileUploadService) {}

  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'upload image',
    type: UploadFileResponse,
  })
  async uploadSingle(@UploadedFile() file: BufferedFile) {
    return await this.fileUploadService.uploadSingle(file);
  }

  @Get(':fileName')
  @ApiResponse({
    status: 200,
    description: 'Response image',
    content: {
      'application/octet-stream': {
        schema: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Public()
  async get(
    @Param('fileName') fileName: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { file, contentType } = await this.fileUploadService.get(fileName);
    res.setHeader(
      'Set-Cookie',
      `your_cookie_name=your_cookie_value; Path=/; SameSite=None; Secure`,
    );
    res.setHeader('Content-Type', contentType);
    file.pipe(res);
  }
}
