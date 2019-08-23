//幸运ID
//时间限制：C/C++语言 1000MS；其他语言 3000MS
//内存限制：C/C++语言 131072KB；其他语言 655360KB
//题目描述：
//小C有一张票，这张票的ID是长度为6的字符串，每个字符都是数字，他想让这个ID变成他的辛运ID，所以他就开始更改ID，每一次操作，他可以选择任意一个数字并且替换它。
//
//如果这个ID的前三位数字之和等于后三位数字之和，那么这个ID就是辛运的。你帮小C求一下，最少需要操作几次，能使ID变成辛运ID

//输入
//输入只有一行，是一个长度为6的字符串。
//
//输出
//输出这个最小操作次数
//
//
//样例输入
//000000
//样例输出
//0
//
//Hint
//输入样例2
//000018
//
//输出样例2
//1
//
//样例解释：将前三位任意一个改为9即可满足条件，操作数为1

#include <stdio.h>
#include <iostream>
#include <string>
using namespace std;
int main(){
    int a[7];
    string str;
    while (cin>>str) {
        for (int i=0; i<str.length(); i++) {
            int tem=int(str[i]-'0');
            a[i]=tem;
        }
        int f,b;
        f=a[0]+a[1]+a[2];
        b=a[3]+a[4]+a[5];
        if (f==b) {
            cout<<0<<endl;
        }
        else{
            int result=0;
            //while (f!=b) {

            //}
        }
    }
    return 0;
}