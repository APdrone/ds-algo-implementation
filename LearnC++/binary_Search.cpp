#include<bits/stdc++.h>

using namespace std;


//bs takes increasing/decreasing array nums and return the index of k in it, if k doesnt exist return -1
int bs(vector<int> &nums,int k){
    int low=0, hi=nums.size()-1;
    while(low<=hi){
        int mid=(low+hi)/2;
        if(nums[mid]>k){
            return mid;
        }else if (nums[mid] >k){
            hi=mid-1;
        }else{
            low=mid+1;
        }
    }
    return -1;
}

int main(){
    vector<int> nums= {1,2,2,3,4,4,5,6,7,8,9};
    cout<<bs(nums,8)<<endl;
    cout<<bs(nums,11)<<endl;
    
    return 0;
}

