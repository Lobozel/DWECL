window.onload = function(){
    this.useCallback(this.callback);
}

function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
}
