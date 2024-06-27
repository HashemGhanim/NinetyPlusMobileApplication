
const getAllChats = async (userId, token) => {
    console.log(userId, token)
    
    const d = await new Promise((res, rej) =>   {
        setTimeout(() => {
            res([
                {
                    "id": "6671c5453dbccf4888b27e76",
                    "image": "https://randomuser.me/api/portraits/men/1.jpg",
                    "name": "سلمان زرعي",
                    "unread": 0,
                    "time": "06:02 AM",
                    "lastMessage": "مرحباً، كيف حالك؟ انا سلمان زرعي طالب هندسة حاسوب في جامعة خضوري طولكرم احب البرمجو كثيرا"
                },
                {
                    "id": "6671c545767fa879ea2682b8",
                    "image": "https://randomuser.me/api/portraits/women/1.jpg",
                    "name": "نسرين الرمزي",
                    "unread": 4,
                    "time": "04:22 AM",
                    "lastMessage": "لا تنسى اجتماعنا."
                },
                {
                    "id": "6671c54537460a706939febd",
                    "image": "https://randomuser.me/api/portraits/men/2.jpg",
                    "name": "بكر فاريل",
                    "unread": 2,
                    "time": "11:26 AM",
                    "lastMessage": "هل يمكنك إرسال التقرير لي؟"
                },
                {
                    "id": "6671c54552f3a9d1994cc6f2",
                    "image": "https://randomuser.me/api/portraits/women/2.jpg",
                    "name": "تيريزا فرانكو",
                    "unread": 0,
                    "time": "02:51 AM",
                    "lastMessage": "عمل رائع في المشروع!"
                },
                {
                    "id": "6671c5451220220aacb0b106",
                    "image": "https://randomuser.me/api/portraits/men/3.jpg",
                    "name": "يورك بارلو",
                    "unread": 1,
                    "time": "07:49 PM",
                    "lastMessage": "سأتصل بك لاحقاً."
                },
                {
                    "id": "6671c545bddfee0cf04fe28c",
                    "image": "https://randomuser.me/api/portraits/women/3.jpg",
                    "name": "أدلا بايج",
                    "unread": 3,
                    "time": "09:06 PM",
                    "lastMessage": "عيد ميلاد سعيد!"
                },
                {
                    "id": "6671c545e5b29e28c846c8f5",
                    "image": "https://randomuser.me/api/portraits/men/4.jpg",
                    "name": "بكستر سميث",
                    "unread": 1,
                    "time": "04:57 AM",
                    "lastMessage": "أراك غداً."
                },
                {
                    "id": "6671c54546c8d5cecd339693",
                    "image": "https://randomuser.me/api/portraits/women/4.jpg",
                    "name": "روزاليندا ليفين",
                    "unread": 4,
                    "time": "08:47 AM",
                    "lastMessage": "دعنا نتناول الغداء."
                }
            ])
        }, 3000);
       
    })
    console.log('dsadsadasda', d);
    return d;
}


export default {getAllChats}