SELECT 
    id AS ID, 
    Message_user_id AS UserID, 
    Message_chat_id AS ChatID, 
    Message_user_message AS UserMessage, 
    Message_message AS Message1, 
    Message_time AS Time1, 
    Message_order_id AS OrderID 
FROM messagedata 
WHERE 
    id IS NULL OR id = ""
    OR Message_user_id IS NULL OR Message_user_id = "" 
    OR Message_chat_id IS NULL OR Message_chat_id = "" 
    OR Message_user_message IS NULL
    OR Message_message IS NULL OR Message_message = "" 
    OR Message_time IS NULL
    OR Message_order_id IS NULL OR Message_order_id = "";