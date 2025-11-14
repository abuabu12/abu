export interface FileDetails {
  file: File;
  url: string;
}

export interface GenerativePart {
    inlineData: {
        data: string;
        mimeType: string;
    };
}
