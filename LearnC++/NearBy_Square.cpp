/**
 * https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/practice-problems/algorithm/nearby-squares-338a4a64/
 * 
 * NearBy Square
 */

#include<bits/stdc++.h>


using namespace std;

int bestDivision(int index,int sum_b, int sum_c, int arr[], int n){
    if(index== n){
       
        return abs(sum_b*sum_b - sum_c*sum_c);
    }

    int res=bestDivision(index+1,sum_b+arr[index],sum_c,arr,n);

    int res2=bestDivision(index+1,sum_b,sum_c+arr[index],arr,n);

    return min(res,res2);
}

int arr[];
int n, total_sum;

int f(int index,int sum_b){
    if(index==n){
        int sum_c= total_sum-sum_b;
       abs(sum_b*sum_b - sum_c*sum_c);
    }
    int res=f(index+1,sum_b+arr[index]);

    int res2=f(index+1,sum_b);
    return min(res,res2);
}

int main(){
    int arr[]={1,2,3,4};

    return 0;
}