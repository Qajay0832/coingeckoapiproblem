import React from 'react'

const TableRow = ({name,symbol,priceChange,currentPrice,image,index}) => {
  console.log('key',index);
  
  return (
    <tr key={index}>
        <td>{name}</td>
        <td><img src={image} alt={name}/></td>
        <td>{symbol}</td>
        <td className={priceChange<0?'red':'green'}>{priceChange}</td>
        <td>{currentPrice}</td>
    </tr>
  )
}

export default TableRow