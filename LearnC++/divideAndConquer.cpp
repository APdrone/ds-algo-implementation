#include <bits/stdc++.h>;

using namespace std;

void combine(int arr[], int beg, int mid, int end){
    int temp[end-beg+1];
    // int i=0, ;
}

//sort the array from beg to end
void mergeSort(int arr[], int beg, int end){
    if(beg==end){
        return;
    }
    int mid = (beg+end)/2;

    mergeSort(arr,beg,mid);
    mergeSort(arr,mid+1,end);

    combine(arr,beg,mid,end);

}

void sortArray(int arr[],int n){

}

int main(){
    return 0;
}