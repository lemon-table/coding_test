function twoSum(nums: number[], target: number): number[] {

    let result = [0,0];

    nums.forEach((x,i) =>{

        nums.forEach((y,j)=>{

            if(i>j && (x+y)===target) result=[j,i];

        });
        
    });

    return result;

    
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,3],6));