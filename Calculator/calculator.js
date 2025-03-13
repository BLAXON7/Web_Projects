function appnum (Num)
{
    if(Num>0 && Num<=9)
    {
        document.getElementById("butid").value+=Num;
    }
    else if (Num==' ')
    {
        document.getElementById("butid").value='';
    }
    else if (Num=='×')
        {
            document.getElementById("butid").value+='×';
        }
        else if (Num=='+')
            {
                document.getElementById("butid").value+='+';
            }
        else if (Num=='−')
        {
            document.getElementById("butid").value+='−';
        }
    else if (Num==',')
    {
        let textarea = document.getElementById("butid");
        textarea.value = textarea.value.slice(0, -1);
    }
    else if (Num=='=')
        {
            let textarea = document.getElementById("butid").value;
            let result=safeEvaluate(textarea);
            document.getElementById("butid").value=result;
        }
        else if(Num=='÷')
        {
            document.getElementById("butid").value+='÷';
        }
}
function safeEvaluate(expression) {
    expression = expression.replace(/÷/g, '/')
                           .replace(/−/g, '-')
                           .replace(/×/g, '*');    
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return "Error";
    }
}
 