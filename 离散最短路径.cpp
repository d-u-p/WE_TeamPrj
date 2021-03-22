//Dijkstra算法，求最短路径 
#include<iostream>
#include<cstring>
#include<algorithm>
#include<cmath>
using namespace std;
const int N = 1000;
int i,j,n,m,x,y,l,k;
double temp,minn,maxx;
int a[N][3],pre[N];
double w[N][N],dis[N];
bool b[N];

//求a,b之间的最短路径，以及打印路径 
void bfs(int a, int c){
	maxx = 0x7f;
	memset(dis,maxx,sizeof(dis));
	memset(pre,0,sizeof(pre));
	memset(b,1,sizeof(b));//用来标识图中的点是否被遍历,true代表蓝点，未遍历 

	//初始化起点相关数值 
	dis[a] = 0;
	b[a] = false; 
	pre[a] = 0;

	for(i=1; i<=n; i++){//起点能够直接相连的点赋值 
		dis[i] = w[a][i];
	}
	
	for(i=1; i<=n-1; i++){//寻找起点到剩余n-1个点的最短路径 
	
		minn = maxx;//minn是一个中间量,用来作为暂存最小值 
		l = 0;//用来记录中间路径
		for(j=1; j<=n; j++){//寻找合适的蓝点变成白点 
			if(b[j] && dis[j]<minn){
				minn = dis[j];
				l = j;
			} 
		}
		
		if(l == 0) break; //没有蓝点变成白点
		
		b[l] = false;//把蓝点变白 
		
		for(j=1; j<=n; j++){//更新由于新白点形成的dis
			 if(dis[l]+w[l][j]<dis[j]){
			 	dis[j] =  dis[l] + w[l][j];
			 	pre[j] = l;
			 }
		}
		
	}
	printf("%.2lf\n",dis[c]);
	
	//print path
	k = c;
	while(k!=0){
		cout<<k<<"<-";	
		k = pre[k];
	}
	cout<<a;
	 
}

int main(){
	cin>>n;
	for(i=1; i<=n; i++){
		cin>>a[i][1]>>a[i][2];
	}
	memset(w,0x7f,sizeof(w));
	cin>>m;
	for(i=1; i<=m; i++){
		cin>>x>>y;
		temp = sqrt(pow(double(a[x][1]-a[y][1]),2)+pow(double(a[x][2]-a[y][2]),2));
		w[x][y] = w[y][x] = temp;
	}
	cin>>i>>j;
	bfs(i,j);
	return 0;
}

