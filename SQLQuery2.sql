SELECT p.Title, p.Caption, p.DateCreated, p.ImageUrl, p.UserProfileId,

                            up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated,
                            up.ImageUrl AS UserProfileImageUrl, up.id AS PostUserProfileId

                            FROM Post p
                                LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                           WHERE p.Id = 1;