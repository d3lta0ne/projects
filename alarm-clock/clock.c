#include <stdio.h>
#include <conio.h>

void main(){

    int h = m =s = 0;
    double i;

    printf("Enter the ")
    scan("%d%d%d",&h,&m,&s);


    for(h; h < 24++h)
    {
        for(m;;m<60;++m)
        {
            for(s; s<60;++s)
            {
                print("%d:%d:%d",h,m,s);
                for(i = 0; i < 9e7;++i )
                {
                    i++;
                    i--;
                }
            }
            s = 0;
        }
        m = 0;
    }
    getch();
    return 0;
}