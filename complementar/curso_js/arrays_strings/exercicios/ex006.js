let nums1 = [1, 2, 3, 4, 5, 6];

let nums2 = [1, 2, 3, 4];

function numElementos(num) {
  if (num.length > 5) {
    console.log("Muitos Elementos");
  } else {
    console.log("Poucos Elementos");
  }
}

numElementos(nums1);
numElementos(nums2);
