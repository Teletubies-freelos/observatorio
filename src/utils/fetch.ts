const mswFetch = new Proxy(fetch,{
    async apply(target,thisArg,args){
        thisArg.server = await import("msw/node")
        return Reflect.apply(target,thisArg,args)
    }
})
