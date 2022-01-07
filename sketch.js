var marks=[40,45,35,40,49]
var sum=0
function setup() {
  createCanvas(400, 400);
  console.log(marks)
  console.log(marks[1])
  console.log(marks[4])
  sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  console.log(sum)
  console.log(marks.length)
  var avg=sum/marks.length
  console.log(avg)
}

function draw() {
  background(220);
}