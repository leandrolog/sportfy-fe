import moment from "moment";

export const DateTimeConverter = ({ date }) => {
    return moment(date).format('YYYY/MM/DD, HH:mm:ss');
};
