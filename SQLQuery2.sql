SELECT up.[Name], up.Bio, up.DateCreated, up.ImageUrl, up.Email,

p.Title, p.Id AS PostId, p.Caption, p.DateCreated, p.ImageUrl, p.UserProfileId AS UserProfileId

FROM UserProfile up
LEFT JOIN Post p ON p.UserProfileId = up.Id 
WHERE up.Id = 1;


