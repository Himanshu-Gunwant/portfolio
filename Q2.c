#include <stdio.h>

int stack[50];
int top = -1;

void push(int x) {
    stack[++top] = x;
}

int pop() {
    return stack[top--];
}

int main() {
    char postfix[50];
    int i = 0, a, b;

    scanf("%s", postfix);

    while (postfix[i] != '\0') {
        char ch = postfix[i];

        if (ch >= '0' && ch <= '9') {
            push(ch - '0');
        } else {
            b = pop();
            a = pop();
            if (ch == '+') push(a + b);
            else if (ch == '-') push(a - b);
            else if (ch == '*') push(a * b);
            else if (ch == '/') push(a / b);
        }
        i++;
    }

    printf("%d\n", pop());

    return 0;
}
