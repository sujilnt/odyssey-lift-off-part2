import casual from "casual";
export const mocks = {
    Query:{
        spaceCats: () => [...new Array(10)],
        tracks: () => [...new Array(6)],
    },
    SpaceCat: () => ({
        id: ()=> casual.uuid,
        name: ()=>casual.name,
        age: ()=>casual.integer(10,50),
        Mission: ()=> [...new Array(casual.integer(1,10))],
    }),
    Mission: () => ({
        id: ()=> casual.uuid,
        name: ()=>casual.name,
        description: ()=> casual.description,
    }),
    Track: () => ({
        id: ()=> casual.uuid,
        title: ()=> casual.title,
        author: ()=> ({
            id: casual.uuid,
            name: casual.name,
            photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        }),
        thumbnail: ()=>"https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        modulesCount:()=> casual.integer(10,50),
        length: ()=> casual.integer(1,50),
    })
}