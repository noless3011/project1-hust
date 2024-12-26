import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/response-user.dto';
import { UserId } from 'src/decorators/user-payload.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch()
  @ApiOperation({ summary: 'Update User Info' })
  @ApiOkResponse({ type: [UserResponseDto] })
  async updateUserInfo(@UserId() userId: number, @Body() dto: UpdateUserDto) {
    return await this.userService.update(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get Current User' })
  @ApiOkResponse({ type: UserResponseDto })
  async getCurrentUser(@UserId() id: number) {
    return await this.userService.findById(id);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get User By UserId' })
  @ApiOkResponse({ type: UserResponseDto })
  async getById(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
