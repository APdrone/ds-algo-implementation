#include <bits/stdc++.h>

using namespace std;

bool isPalindrome(string str,int start, int end){
    if(start>= end) return true;
    cout<<"before start and end"<<start<<end;

    if(str[start] != str[end]){
        return false;
    }
    cout<<"after start and end"<<start<<end;
    return isPalindrome(str, start+1,end-1);
}

int main(){
    string str;
    cout<<"Enter a string: ";
    cin >> str;
    if(isPalindrome(str,0,str.length()-1)){
        cout<<str<<" is a palindrome"<<endl;
    }else{
         cout<<str<<"is not a palindrome"<<endl;
    }
    return 0;
}