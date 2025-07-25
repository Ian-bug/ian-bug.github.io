# 頭像圖片資料夾

這個資料夾用來存放您的頭像圖片。

## 使用方法

1. 將您的頭像圖片放入此資料夾
2. 支援的格式：PNG、JPG、JPEG、SVG
3. 建議圖片尺寸：至少 200x200 像素
4. 建議檔名：avatar.png 或 avatar.jpg

## 在代碼中使用

```tsx
import avatarImage from '@/assets/images/avatar.png'

// 在Avatar組件中使用
<Avatar src={avatarImage} />
```

## 注意事項

- 請確保圖片檔案大小不要太大（建議小於 1MB）
- 圓形頭像效果會自動套用
- 如果沒有提供圖片，會顯示預設的SVG頭像