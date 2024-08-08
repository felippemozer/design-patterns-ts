export default abstract class Middleware {
    public next: Middleware;

    public link(next: Middleware): Middleware {
        this.next = next;
        return next;
    }

    public abstract check(email: string, password: string): boolean;

    protected checkNext(email: string, password: string): boolean {
        if(!this.next) {
            return true;
        }

        return this.next.check(email, password);
    }
}