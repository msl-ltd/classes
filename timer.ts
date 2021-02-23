class Timer {
    public interval: boolean;
    public timeout: number;

    private handler: TimerHandler;
    private id: number = null;

    public setTimeout(handler: TimerHandler, timeout?: number, ...argument: any[]): void {
        this.handler = handler;
        this.timeout = timeout;

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

        switch (typeof this.handler) {
            case 'string':
                eval(this.handler);
                break;

            case 'function':
                this.handler(argument);
                break;

            default:
                break;
        }

        if (this.interval) {
            this.setTimeout(this.handler, this.timeout, argument);
        }
    }
}