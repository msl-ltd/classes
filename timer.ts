class Timer {
    private handler: Function;
    private handle: number = null;

    public setTimeout(handler: Function, timeout?: number, ...argument: any[]): void {
        this.handler = handler;

        this.clearTimeout();
        this.handle = window.setTimeout(this.callback.bind(this), timeout, argument);
    }

    public clearTimeout(): void {
        if (this.handle !== null) {
            window.clearTimeout(this.handle);

            this.handle = null;
        }
    }

    private callback(...argument: any[]): void {
        this.handle = null;

        this.handler(argument);
    }
}