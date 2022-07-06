import React from 'react'

import './style.css'
const List = ({urlList, deleteItem}) => {

    function DateAnalysis(dateObject) {
        let date = JSON.stringify(dateObject)

        let year = date.slice(1, 5)
        let month = date.slice(6,8)
        let day = date.slice(9,11)
        let newMonth
        switch (month) {
          case "01":
            newMonth = "Jan";
            break;
          case "02":
            newMonth = "Feb";
            break;
          case "03":
            newMonth = "Mer";
            break;
          case "04":
            newMonth = "Apr";
            break;
          case "05":
            newMonth = "May";
            break;  
          case "06":
            newMonth = "Jun";
            break;
          case "07":
            newMonth = "Jul";
            break;
          case "08":
            newMonth = "Aug";
            break;
          case "09":
            newMonth = "Sep";
            break;
          case "10":
            newMonth = "Oct";
            break;              
          case "11":
            newMonth = "Nov";
            break;
          case "12":
            newMonth = "Dec";
            break;
            
            default:
                break;
        }
        return (newMonth + " " + day + ", " + year)
    }

  return (
    <div>
        <h1>Url List</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { urlList.map((val, key) => {
                return (<tr className="item" key={key}>
                          <td><time>{DateAnalysis(val.date)}</time></td>
                          <td><a href={val.originalUrl} className='url_link'>{val.originalUrl}</a></td>
                          <td><a href="/#" className='shortUrl'>{"http://localhost:5000/" + val.shortUrl}</a></td>
                          <td><h3>{val.clicks}</h3></td>
                          <td><button onClick={() => deleteItem(val._id)}>Delete</button></td>
                      </tr>);
              }) 
            }
          </tbody>
        </table>
    </div>
  )
}

export default List