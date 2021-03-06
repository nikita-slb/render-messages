import React, {Component} from 'react';
import Message from "./Message"

import './App.scss';
import './Styles.scss';

const Messages = [
    {
        id: "1",
        date_send: "2019-04-03 23:50:10",
        new: false,
        message: "<p class=\"big-margin\">\n    <b>Новое сообщение от заказчика</b>\n</p>\n\n<p>\n    <a href=\"https://allput.ru/user/782760/zakazchik\" target='_blank'>\n        Заказчик [id782760]</a> написал(а) сообщение:\n</p>\n\n<p class=\"big-margin\">\n    «?»\n</p>\n\n<p>\n    <a href=\"https://allput.ru/cabinet/order/1145676?send_message=782760\" target='_blank' class=\"btn btn-small-size btn-blue-no-fill\">Написать ответ</a>\n</p>\n\n<p class=\"text-size-12 gray\">\n    Тип: Контрольная<br>\n    Предмет: Математика<br>\n    Название: Решить задачи<br>\n    Срок сдачи: 19&nbsp;дек.&nbsp;2018<br>\n    ID (номер) заказа: 1145676\n</p>",
        mobile_message: "{\"type\":\"root\",\"path_from_root\":\"root\",\"children\":[{\"type\":\"paragraph\",\"path_from_root\":\"root.0\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.0.0\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u043e\\u0432\\u043e\\u0435 \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u043d\\u0438\\u0435 \\u043e\\u0442 \\u0437\\u0430\\u043a\\u0430\\u0437\\u0447\\u0438\\u043a\\u0430\",\"inline\":true,\"style\":\"bold\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.1\",\"children\":[{\"type\":\"link\",\"path_from_root\":\"root.1.0\",\"children\":null,\"params\":{\"url\":\"https:\\/\\/allput.ru\\/user\\/782760\\/zakazchik\",\"content\":\"\\u0417\\u0430\\u043a\\u0430\\u0437\\u0447\\u0438\\u043a [id782760]\",\"inline\":true}},{\"type\":\"text\",\"path_from_root\":\"root.1.1\",\"children\":null,\"params\":{\"content\":\"\\u043d\\u0430\\u043f\\u0438\\u0441\\u0430\\u043b(\\u0430) \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u043d\\u0438\\u0435:\",\"inline\":true,\"style\":\"normal\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.2\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.2.0\",\"children\":null,\"params\":{\"content\":\"\\u00ab \\ud83d\\udc4d \\u00bb\",\"inline\":true,\"style\":\"normal\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.3\",\"children\":[{\"type\":\"button\",\"path_from_root\":\"root.3.0\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u0430\\u043f\\u0438\\u0441\\u0430\\u0442\\u044c \\u043e\\u0442\\u0432\\u0435\\u0442\",\"action\":\"reply_chat_message\",\"id\":9845231,\"inline\":true,\"style\":\"border_button\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.4\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.4.0\",\"children\":null,\"params\":{\"content\":\"\\u0422\\u0438\\u043f: \\u041a\\u043e\\u043d\\u0442\\u0440\\u043e\\u043b\\u044c\\u043d\\u0430\\u044f\",\"inline\":true,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.1\",\"children\":null,\"params\":{\"content\":\"\\u041f\\u0440\\u0435\\u0434\\u043c\\u0435\\u0442: \\u041c\\u0430\\u0442\\u0435\\u043c\\u0430\\u0442\\u0438\\u043a\\u0430\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.2\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u0430\\u0437\\u0432\\u0430\\u043d\\u0438\\u0435: \\u0420\\u0435\\u0448\\u0438\\u0442\\u044c \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.3\",\"children\":null,\"params\":{\"content\":\"\\u0421\\u0440\\u043e\\u043a \\u0441\\u0434\\u0430\\u0447\\u0438: 19&nbsp;\\u0434\\u0435\\u043a.&nbsp;2018\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.4\",\"children\":null,\"params\":{\"content\":\"ID (\\u043d\\u043e\\u043c\\u0435\\u0440) \\u0437\\u0430\\u043a\\u0430\\u0437\\u0430: 1145676\",\"inline\":false,\"style\":\"order_data\"}}],\"params\":null}],\"params\":null}"
    },
    {
        id: "2",
        date_send: "2019-04-03 23:50:10",
        new: false,
        message: "<p class=\"big-margin\">\n    <b>Новое сообщение от заказчика</b>\n</p>\n\n<p>\n    <a href=\"https://allput.ru/user/782760/zakazchik\" target='_blank'>\n        Заказчик [id782760]</a> написал(а) сообщение:\n</p>\n\n<p class=\"big-margin\">\n    «?»\n</p>\n\n<p>\n    <a href=\"https://allput.ru/cabinet/order/1145676?send_message=782760\" target='_blank' class=\"btn btn-small-size btn-blue-no-fill\">Написать ответ</a>\n</p>\n\n<p class=\"text-size-12 gray\">\n    Тип: Контрольная<br>\n    Предмет: Математика<br>\n    Название: Решить задачи<br>\n    Срок сдачи: 19&nbsp;дек.&nbsp;2018<br>\n    ID (номер) заказа: 1145676\n</p>",
        mobile_message: "{\"type\":\"root\",\"path_from_root\":\"root\",\"children\":[{\"type\":\"paragraph\",\"path_from_root\":\"root.0\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.0.0\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u043e\\u0432\\u043e\\u0435 \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u043d\\u0438\\u0435 \\u043e\\u0442 \\u0437\\u0430\\u043a\\u0430\\u0437\\u0447\\u0438\\u043a\\u0430\",\"inline\":true,\"style\":\"bold\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.1\",\"children\":[{\"type\":\"link\",\"path_from_root\":\"root.1.0\",\"children\":null,\"params\":{\"url\":\"https:\\/\\/allput.ru\\/user\\/782760\\/zakazchik\",\"content\":\"\\u0417\\u0430\\u043a\\u0430\\u0437\\u0447\\u0438\\u043a [id782760]\",\"inline\":true}},{\"type\":\"text\",\"path_from_root\":\"root.1.1\",\"children\":null,\"params\":{\"content\":\"\\u043d\\u0430\\u043f\\u0438\\u0441\\u0430\\u043b(\\u0430) \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u043d\\u0438\\u0435:\",\"inline\":true,\"style\":\"normal\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.2\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.2.0\",\"children\":null,\"params\":{\"content\":\"\\u00ab \\ud83d\\udc4d \\u00bb\",\"inline\":true,\"style\":\"normal\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.3\",\"children\":[{\"type\":\"button\",\"path_from_root\":\"root.3.0\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u0430\\u043f\\u0438\\u0441\\u0430\\u0442\\u044c \\u043e\\u0442\\u0432\\u0435\\u0442\",\"action\":\"reply_chat_message\",\"id\":9845231,\"inline\":true,\"style\":\"border_button\"}}],\"params\":null},{\"type\":\"paragraph\",\"path_from_root\":\"root.4\",\"children\":[{\"type\":\"text\",\"path_from_root\":\"root.4.0\",\"children\":null,\"params\":{\"content\":\"\\u0422\\u0438\\u043f: \\u041a\\u043e\\u043d\\u0442\\u0440\\u043e\\u043b\\u044c\\u043d\\u0430\\u044f\",\"inline\":true,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.1\",\"children\":null,\"params\":{\"content\":\"\\u041f\\u0440\\u0435\\u0434\\u043c\\u0435\\u0442: \\u041c\\u0430\\u0442\\u0435\\u043c\\u0430\\u0442\\u0438\\u043a\\u0430\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.2\",\"children\":null,\"params\":{\"content\":\"\\u041d\\u0430\\u0437\\u0432\\u0430\\u043d\\u0438\\u0435: \\u0420\\u0435\\u0448\\u0438\\u0442\\u044c \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.3\",\"children\":null,\"params\":{\"content\":\"\\u0421\\u0440\\u043e\\u043a \\u0441\\u0434\\u0430\\u0447\\u0438: 19&nbsp;\\u0434\\u0435\\u043a.&nbsp;2018\",\"inline\":false,\"style\":\"order_data\"}},{\"type\":\"text\",\"path_from_root\":\"root.4.4\",\"children\":null,\"params\":{\"content\":\"ID (\\u043d\\u043e\\u043c\\u0435\\u0440) \\u0437\\u0430\\u043a\\u0430\\u0437\\u0430: 1145676\",\"inline\":false,\"style\":\"order_data\"}}],\"params\":null}],\"params\":null}"
    }
];

class App extends Component {
    render() {
        return (
            <div className="WorkPage">
                <div className="WorkPageContent">
                    <div className="Messages">
                        {
                            Messages.map((message, key) => {

                                return (
                                    <Message key={key} message={message}/>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
