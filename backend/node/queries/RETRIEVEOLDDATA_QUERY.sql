SELECT
                           md.Message_chat_id AS chatID,
                           MAX(md.Message_order_id) AS LastMessage,
                           MAX(md2.Message_time) AS LastMessageTime
                       FROM
                           messagedata md
                               JOIN messagedata md2 ON md.Message_chat_id = md2.Message_chat_id
                               AND md.Message_order_id = md2.Message_order_id
                       WHERE
                           md.Message_time < ?
                       GROUP BY
                           md.Message_chat_id;