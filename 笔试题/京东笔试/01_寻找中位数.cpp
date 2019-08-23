//题目描述：
//  数学课上，老师揪出了老是和旁边同学交头接耳的小Q，为此老师提出了一个问题看小Q是否对知识有所掌握。
//
//  老师给了小Q n个整数，要求小Q往其中加入一个数，但数列的中位数保持不变。

//输入
//第一行一个数 n（1≤n≤100）。
//
//第二行n个数Ai，表示n个整数（1≤Ai≤100），保证互不相同。
//
//输出
//一个数，小Q需要加入的数。
//
//如果是整数，直接输出。如果是小数，请不要输出多余的后缀0
#include<iostream>
using namespace std;
void array_input(double array[], int n)
{
    for(int i=0;i<n;i++)
    cin>>array[i];
}
void select_sort(double array[], int n)
{
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(array[j]<array[i])
            {
                double t;
                t=array[i];
                array[i]=array[j];
                array[j]=t;
            }
        }
    }
}
double median(double array[], int n)
{
    double medium;
    if(n%2==1)
    medium=array[n/2];
    else
    medium=(array[n/2-1]+array[n/2])/2;
    return medium;
}
int main()
{
    int n;
	double arr[100];
    cin >> n;
	array_input(arr,n);
	select_sort(arr,n);
	cout<<median(arr,n)<<endl;
	return 0;
}
