// export const uptadeObj = (items, itemsId, objPropName) => {
//    items.map(u => {
//       if (u[objPropName] === itemsId) {
//          return { ...u, sub: true }
//       }
//       return u
//    })
// }
export const uptadeOрj = (items, userId, itemId, sub) => {
   return items.map(u => {
      if (u[userId] === itemId) {
         return { ...u, ...sub }
      }
      return u
   })

}