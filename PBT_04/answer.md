
Câu A1:
Position	Vẫn chiếm chỗ trong flow?	Tham chiếu vị trí	                Cuộn theo trang?	Use case
static	    Có                          Theo flow tự nhiên của tài liệu     Có                  Gía trị default, đưa phần tử về mặc định  
relative	Có                          Vị trí chính nó ban đầu             Có                  Dùng làm gốc tọa độ cho absolute
absolute	Không                       Tổ tiên gần nhất là relative        Có                  Làm popup, tooltip, thanh menu           
fixed	    Không                       Viewport                            Không               Navbar
sticky	    Có                          Mix giữa relative và fixed          Có                  Table header, sidebar


Câu A2:
TH1: [ Item 1 (25%) ] [ Item 2 (25%) ] [ Item 3 (25%) ] [ Item 4 (25%) ] |

TH2: 
      ----------------  (margin)  ----------------  (margin)   
      [    Item 1    ]   5% tổng  [    Item 2    ]   5% tổng   
      ----------------            ----------------             
      ----------------            ----------------           
      [    Item 3    ]            [    Item 4    ]             
      ----------------            ----------------             
      ----------------            ----------------             
      [    Item 5    ]            [    Item 6    ]             
      ----------------            ----------------      

TH3:


 -------------            -------------            ------- 
 [  Item 1   ]             [  Item 2   ]           [Item3]  (Căn giữa dọc)
 -------------            -------------            ------- 

^                          ^                        ^
Sát lề trái             Chính giữa               Sát lề phải


TH 4:

| [Item 1] | gap |          [ Item 2 ]          | gap |[Item 3]|
|  200px   |20px |     Rộng hết phần còn lại    |20px | 200px  |
|          |     |            (1fr)             |     |        |


TH5:

| [  Item 1 (1fr)  ]  gap  [  Item 2 (1fr)  ]  gap  [  Item 3 (1fr)  ] |
|        gap                 gap                 gap        |
| [  Item 4 (1fr)  ]  gap  [  Item 5 (1fr)  ]  gap  [  Item 6 (1fr)  ] |
|        gap                 gap                 gap        |
| [  Item 7 (1fr)  ]  gap  (Trống)              gap  (Trống)         |


Câu B1: