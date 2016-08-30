

export function findAllMethodsThroughReflection(nativeObject) {
    var nativeClass = nativeObject.getClass();
    var nativeMethods = nativeClass.getDeclaredMethods();

    debugger;
    for (var i = 0; i < nativeMethods.length; i++) {
        console.log("----------");
        var method = nativeMethods[i];

        var name = method.getName();
        console.log("Method name: " + name);
        
        var parameterTypes = method.getParameterTypes();
        console.log("param count: " + parameterTypes.length);
        
        for (var pti = 0; pti < parameterTypes.length; pti++) {
            var pt = parameterTypes[pti];
            var typeVal = pt.toLocaleString();
            console.log("Type: " + typeVal);
        }
    };
}