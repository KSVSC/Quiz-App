package main

import (
   "fmt"
   "github.com/gin-contrib/cors"                       
   "github.com/gin-gonic/gin"
   "github.com/jinzhu/gorm"
   _ "github.com/jinzhu/gorm/dialects/sqlite"          
)
var db *gorm.DB                                        
var err error

type User struct {
   ID uint `json:"id"`
   Name string `json:"name"`
   EmailID string `json:"emailid"`
}

type Quiz struct {
   ID uint `json:"id"`
   Genre string `json:"genre"`
   Question string `json:"question"`
   Option1 string `json:"option1"`
   Option2 string `json:"option2"`
   Option3 string `json:"option3"`
   Option4 string `json:"option4"`
   Answer string `json:"answer"`
   QType string `json:"q_type"`
}

func main() {
   db, err = gorm.Open("sqlite3", "./gorm.db")
   if err != nil {
      fmt.Println(err)
   }
   defer db.Close()

   db.AutoMigrate(&User{})
   r := gin.Default()
   r.GET("/user/", GetUserlist)                             
   r.GET("/user/:id", GetUser)
   r.POST("/user", CreateUser)
   r.DELETE("/user/:id", DeleteUser)

   db.AutoMigrate(&Quiz{})
   r.GET("/question/", GetQuiz)                            
   r.GET("/question/:id", GetQuestion)
   r.POST("/question", CreateQuestion)
   r.POST("/updatequestion/", UpdateQuestion)
   r.DELETE("/question/:id", DeleteQuestion)


   r.Use((cors.Default()))
   r.Run(":8080")    

                                 
}

func DeleteUser(c *gin.Context) {
   id := c.Params.ByName("id")
   var user User
   d := db.Where("id = ?", id).Delete(&user)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func DeleteQuestion(c *gin.Context) {
   id := c.Params.ByName("id")
   var question Quiz
   d := db.Where("id = ?", id).Delete(&question)
   fmt.Println(d)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, gin.H{"id #" + id: "deleted"})
}

func UpdateQuestion(c *gin.Context) {
   var question Quiz
   id := c.Params.ByName("id")
   fmt.Println(id)
   if err := db.Where("id = ?", id).First(&question).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   }
   c.BindJSON(&question)
    db.Save(&question)
   c.Header("access-control-allow-origin", "*") 
   c.JSON(200, question)
}

func CreateUser(c *gin.Context) {
   var user User
   c.BindJSON(&user)
   db.Create(&user)
   c.Header("access-control-allow-origin", "*") 
   c.JSON(200, user)
}

func CreateQuestion(c *gin.Context) {
   var question Quiz
   c.BindJSON(&question)
   db.Create(&question)
   c.Header("access-control-allow-origin", "*")
   c.JSON(200, question)
}

func GetUser(c *gin.Context) {
   id := c.Params.ByName("id")
   var user User
   if err := db.Where("id = ?", id).First(&user).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") 
      c.JSON(200, user)
   }
}

func GetQuestion(c *gin.Context) {
   id := c.Params.ByName("id")
   var question Quiz
   if err := db.Where("id = ?", id).First(&question).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") 
      c.JSON(200, question)
   }
}

func GetUserlist(c *gin.Context) {
   var user []User
   if err := db.Find(&user).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") 
      c.JSON(200, user)
   }
}

func GetQuiz(c *gin.Context) {
   var question []Quiz
   if err := db.Find(&question).Error; err != nil {
      c.AbortWithStatus(404)
      fmt.Println(err)
   } else {
      c.Header("access-control-allow-origin", "*") 
      c.JSON(200, question)
   }
}
