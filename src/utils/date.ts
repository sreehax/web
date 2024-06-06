export {}

declare global {
    interface Date {
        prettyFmt(): string;
    }
}

Date.prototype.prettyFmt = function (): string {
    return this.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
