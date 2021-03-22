//Dijkstra�㷨�������·�� 
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

//��a,b֮������·�����Լ���ӡ·�� 
void bfs(int a, int c){
	maxx = 0x7f;
	memset(dis,maxx,sizeof(dis));
	memset(pre,0,sizeof(pre));
	memset(b,1,sizeof(b));//������ʶͼ�еĵ��Ƿ񱻱���,true�������㣬δ���� 

	//��ʼ����������ֵ 
	dis[a] = 0;
	b[a] = false; 
	pre[a] = 0;

	for(i=1; i<=n; i++){//����ܹ�ֱ�������ĵ㸳ֵ 
		dis[i] = w[a][i];
	}
	
	for(i=1; i<=n-1; i++){//Ѱ����㵽ʣ��n-1��������·�� 
	
		minn = maxx;//minn��һ���м���,������Ϊ�ݴ���Сֵ 
		l = 0;//������¼�м�·��
		for(j=1; j<=n; j++){//Ѱ�Һ��ʵ������ɰ׵� 
			if(b[j] && dis[j]<minn){
				minn = dis[j];
				l = j;
			} 
		}
		
		if(l == 0) break; //û�������ɰ׵�
		
		b[l] = false;//�������� 
		
		for(j=1; j<=n; j++){//���������°׵��γɵ�dis
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

