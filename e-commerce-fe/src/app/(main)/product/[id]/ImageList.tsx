export class ImageList {
    public currentIndex = 0;
    public images: string[] = [];
    static _instance: ImageList;
    private constructor() { this.updateImages("/images") }
    public static get instance(): ImageList {
        if (!ImageList._instance) {
            ImageList._instance = new ImageList();
        }

        return ImageList._instance;
    }

    public updateImages(folder: string) {
        for (let i = 1; i <= 11; i++) {
            this.images.push(folder + `/${i}.jpg`)
        }
    }
}

