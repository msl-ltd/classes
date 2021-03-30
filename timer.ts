class Timer {
    private handler: Function;
    private id: number = null;

    public setTimeout(handler: Function, timeout?: number, ...argument: any[]): void {
        this.handler = handler;

        this.clearTimeout();
        this.id = window.setTimeout(this.callback.bind(this), timeout, argument);
    }

    public clearTimeout(): void {
        if (this.id !== null) {
            window.clearTimeout(this.id);

            this.id = null;
        }
    }

    private callback(...argument: any[]): void {
        this.id = null;

        this.handler(argument);
    }
}