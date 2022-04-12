#include<bits/stdc++.h>
using namespace std;


vector<int> check(int**arr,int i,int j,int n){
    vector<int> v1,v2,v3;
    vector<int> res;
    for(int p=1;p<=9;p++){
    for(int k=0;k<n;k++){
        if(arr[k][j]==p)break;
        else if(k==n-1){
           v1.push_back(p);
        };
    };
    };
    for(int p=1;p<=9;p++){
    for(int k=0;k<n;k++){
        if(arr[i][k]==p)break;
        else if(k==n-1){
           v2.push_back(p);
        };
    };
    };
    
    int p=(i/3)*3;
    int k=(j/3)*3;
    for(int c=1;c<=9;c++){
        int a=0;
    for(;a<3;a++){
        int b=0;
        for(;b<3;b++){
            if(arr[p+a][k+b]==c)break;
            else if(a==2&&b==2)v3.push_back(c);
        };
        if(b!=3)break;
    };
        
    };
    unordered_map<int,int> m;
    for(int a=0;a<v1.size();a++){
        if(m.count(v1[a])){}
        else{
           
            m[v1[a]]=1;
        };
    };
    for(int x=0;x<v2.size();x++){
        if(m.count(v2[x]))m[v2[x]]=2;
    };
    for(int x=0;x<v3.size();x++){
        if(m.count(v3[x])>0&&m[v3[x]]==2){
            res.push_back(v3[x]);
        };
    };
    return res; 

};
bool suduko(int** arr, int n,int z){
    if(z==0){
        cout<<endl;
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                cout<<arr[i][j]<<" ";
            };
            cout<<endl;
        };
        
        return true;};
    bool result;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(arr[i][j]==0){
                vector<int> v=check(arr,i,j,n);
                if(v.size()==0)return false;
                else{
                    for(int p=0;p<v.size();p++){
                        arr[i][j]=v[p];
                        bool result=suduko(arr,n,z-1);
                        if(result){return result;}
                        else arr[i][j]=0;
                    };
                    return result;
                };
            };
        };
    };
   
};
int main(){
    
    // write your code here
    int** arr=new int*[9];
    for(int i=0;i<9;i++){
        arr[i]=new int[9];
    };
    int count=0;
    
    for(int i=0;i<9;i++){
        for(int j=0;j<9;j++){
            cin>>arr[i][j];
            if(arr[i][j]==0)count++;
        };
    };
    
    bool res=suduko(arr,9,count);
    if(res)
    cout<<"true";
    else cout<<"false";
    
    
    
    for(int i=0;i<9;i++){
        delete []arr[i];
    };
    delete arr;
    
    return 0;
    
}