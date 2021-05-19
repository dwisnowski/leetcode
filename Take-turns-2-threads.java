class FooBar {
    private int n;
    private Boolean isFoosTurn;

    public FooBar(int n) {
        this.n = n;
        this.isFoosTurn = true;
    }

    public void foo(Runnable printFoo) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            while(this.isFoosTurn == false) {
                Thread.sleep(1);
            }
            
        	// printFoo.run() outputs "foo". Do not change or remove this line.
        	printFoo.run();
            this.isFoosTurn = false;
        }
    }

    public void bar(Runnable printBar) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
             while(this.isFoosTurn == true) {
                Thread.sleep(1);
            }
            
            // printBar.run() outputs "bar". Do not change or remove this line.
        	printBar.run();
            this.isFoosTurn = true;
        }
    }
}
