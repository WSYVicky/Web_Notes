//
//  3.cpp
//  面试
//
//  Created by zjh-mac on 2018/9/16.
//  Copyright © 2018年 zjh-mac. All rights reserved.
//

#include <stdio.h>
#include <stdio.h>
#include <iostream>
#include <cstring>
using namespace std;
#include<iostream>
#include<memory.h>
#include<stdio.h>
using namespace std;
int pos;
bool find(int *Rem,int *Dec,int r,int con,int q)
{
    int i;
    for(i=0;i<q;i++)
    {
        if(Rem[i]==r&&Dec[i]==con)//当余数和商都相等的时候，说明出现循环点
        {
            pos=i;//记录循环点的起始位置
            return false;
        }
    }
    return true;
}
void cal(int a,int b,int c)
{
    int i;
    int p=0;//Dec的指针
    int q=0;//Rem的指针
    int e=0;//结束的位置
    int Int,Dec[100],Rem[100],r,con;//Int整数部分，Dec小数部分，Rem余数部分，r临时余数，con临时商
    memset(Rem,0,sizeof(Rem));
    memset(Dec,0,sizeof(Dec));
    Int=a/b;
    if(a>=b)
        a=a%b;
    con=a*a/b; //算出第一组余数和商
    r=(a*a)%b;

    while(find(Rem,Dec,r,con,q))
    {
        Dec[p++]=con;
        Rem[q++]=r;
        r=r*10;//寻找之后的余数和商
        con=r/b;
        r=r%b;
    }
    for(i=0;i<pos;i++){
        if (Dec[i]==c) {
            cout<<"YES"<<endl;
            return;
        }
    }

    for(i=99;i>=0;i--)//找到结束的位置
        if(Dec[i]!=0)
        {
            e=i;
            break;
        }
    for(i=pos;i<e;i++)//从循环点到最后为循环的部分
    {
        if(i==pos)
            cout<<"[";
        cout<<Dec[i];
        if(i==e-1)
            cout<<"]";
    }
    cout<<endl;
}

int main(){
    int t;
    cin>>t;
    while (t--) {
        int a,b,c;
        cin>>a>>b>>c;
        cal(a,b,c);
    }
    return 0;
}
/*
 1
 91 16 5
 */