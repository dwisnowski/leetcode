class Foo {

    private Boolean hasFirstRanYet;
    private Boolean hasSecondRanYet;

    public Foo() {
        this.hasFirstRanYet = false;
        this.hasSecondRanYet = false;
    }

    public void first(Runnable printFirst) throws InterruptedException {
        this.hasFirstRanYet = true;
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        while (this.hasFirstRanYet == false) {
            //spin
        }
        this.hasSecondRanYet = true;
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
    }

    public void third(Runnable printThird) throws InterruptedException {
        while (this.hasFirstRanYet == false || this.hasSecondRanYet == false) {
            //spin
        }
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
    }
}
