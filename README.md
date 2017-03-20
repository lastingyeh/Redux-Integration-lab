#### 安裝
    
    1. project
    
        npm install
    
    2. json-server (global-install）
    
        npm install -g json-server
    
#### 專案架構

    (1)App -
        
       -action : onFetchLoadItems,onModalToggle,onFetchDeleteItem
        
       -props : searchedKeyword,items,sortType,isFilteringOut,modalToggle
    
            (1.1)TodoAddForm -
                        
               -action : onFetchAddItem
                        
               -props : placeholderText
            
            (1.2)TodoSearchForm -
            
               -action :  onItemSearch
               
               -props : placeholderText
            
            (1.3)TodoList-
            
                 -action : onItemSort,onItemFilterOut
                 
                 -props : children,sortType
                
                (1.3.1)TodoItem-
                
                       -action : onItemEdit,onFetchUpdateItem,onModalToggle
                       
                       -props : id,title,isCompleted
                
                (1.3.2)TodoEditForm-
                
                       -action : onFetchUpdateItem
                       
                       -props : id,isCompleted,title
    
            (1.4)TodoModal-
            
                 -props : children,isOpen,extraMsg,onToggle
                 
 #### 專案說明
 
    1. upload to server
    
        1.1 load items (參考原專案）
        
        1.1 add item (參考原專案）
       
        1.2 update item (參考原專案）
        
        1.3 delete item (本專案新增）
        
    2. sort (參考原專案）
    
    3. search (參考原專案）
    
    4. filter (參考原專案
    
 #### Demo
 
 ![alt tag](https://github.com/lastingyeh/Redux-Integration-lab/blob/master/demo.gif)
 
 #### refs
 
 參考資料：http://ithelp.ithome.com.tw/articles/10187966
 