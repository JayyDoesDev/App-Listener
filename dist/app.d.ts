declare class appListener {
    port: number;
    app: any;
    chalk: any;
    constructor(ops?: {
        port: any;
    });
    listen(num?: number): Promise<void>;
}
export { appListener };
