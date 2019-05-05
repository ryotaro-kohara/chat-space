

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(15)|null: false|
|tweet_id|integer|null: false, foreign_key: true|

### Association
- has_many :tweets
- has_many :groups

## tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(100)|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|varchar(20)|null: false|

### Association
- has_many :tweets
- belongs_to :user