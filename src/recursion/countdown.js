// Recursive Version
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)
// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// 'All Done!'
// return nothing - BASE CASE

// Iterative Version
function countDown(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!")
}



