#include <bits/stdc++.h>

using namespace std;

void printName(int count, int n) {
    if (count == n) {
        return;
    }
    cout << "John" << " ";
    printName(++count, n);
}

void printNumber(int n){
    if(n<=0){
        return;
    }
    cout<<n<<" ";
    printNumber(--n);
}

void printNumberBackTrack(int n){
    if(n<=0){
        return;
    }
    printNumberBackTrack(n-1);
    cout<<n<<" ";
}

void printNumberForward(int count,int n){
    if(count>=n){
        return;
    }
    printNumberForward(++count,n);
    cout<<count<<" ";
}

int main() {
    int n;
    cin >> n;
    // printName(0, n);
    // printNumber(n);
    // printNumberBackTrack(n);
    printNumberForward(0,n);
    return 0;
}