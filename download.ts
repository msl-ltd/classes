export function download(filename: string, content: string, mime: string): void {
    const blob = new Blob([content], { type: mime });

    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        const objectUrl = URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = objectUrl;
        anchor.download = filename;

        document.appendChild(anchor);
        anchor.click();
        document.removeChild(anchor);

        URL.revokeObjectURL(objectUrl);
    }
}