let data=[{
    id:1,
    seat_num:1,
    flight_num:1,
    departure:"Cairo",
    arrival:"Tokyo",
    travelling_date:"5-7-2023"
},
{
    id:2,
    seat_num:15,
    flight_num:5,
    departure:"Alex",
    arrival:"London",
    travelling_date:"5-8-2023"
},
{
    id:3,
    seat_num:5,
    flight_num:1,
    departure:"Cairo",
    arrival:"Tokyo",
    travelling_date:"7-7-2023"
},
{
    id:4,
    seat_num:6,
    flight_num:9,
    departure:"Cairo",
    arrival:"Roma",
    travelling_date:"5-9-2023"
}]


var i;


function display_reservation()
{
    return data;

}

function getbyid(element)
{

 return element.id==i
}

function get_ticket(id)
{
    i=id;
    return data.find(getbyid);

}


function update_ticket(id ,seatNO,flightNO,departure,arrival,travelling_date)
{
    return data[data.indexOf( get_ticket(id))]={
        id:id,
        seat_num:seatNO,
        flight_num:flightNO,
        departure:departure,
        arrival:arrival,
        travelling_date:travelling_date
    }
     
}

// console.log(display_reservation())
// console.log(get_ticket(3));
// console.log(data.indexOf( get_ticket(3)));
// console.log(update_ticket(3,5,6,"Cairo","Tokyo","7-5-2023"));
// console.log(display_reservation())


// id:3,
// seat_num:5,
// flight_num:1,
// departure:"Cairo",
// arrival:"Tokyo",
// travelling_date:"7-7-2023"

module.exports={
    display_reservation,
    get_ticket,
    update_ticket
}


// Let the flight ticket contains info about 
//  seat num, 
//  flight num, 
//  departure and arrival airports
//  Travelling date