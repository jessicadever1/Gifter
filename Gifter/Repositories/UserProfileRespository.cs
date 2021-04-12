using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gifter.Models;
using Gifter.Utils;

namespace Gifter.Repositories
{
    public class UserProfileRespository : BaseRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT id, name, email, bio, imageURL, DateCreated
                  FROM UserProfile 
              ORDER BY DateCreated";

                    var reader = cmd.ExecuteReader();

                    var profiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        profiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated"),
                            ImageUrl = DbUtils.GetString(reader, "PostImageUrl")
                        });
                    }

                    reader.Close();

                    return profiles;
                }
            }
        }



        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT 
                            up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated,
                            up.ImageUrl AS UserProfileImageUrl, up.id AS PostUserProfileId

                            FROM UserProfile up
                            WHERE up.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserProfile profile = null;
                    if (reader.Read())
                    {
                        profile = new UserProfile()
                        {
                            
                                Id = DbUtils.GetInt(reader, "PostUserProfileId"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Email = DbUtils.GetString(reader, "Email"),
                                DateCreated = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                ImageUrl = DbUtils.GetString(reader, "UserProfileImageUrl"),
                            
                        };
                    }

                    reader.Close();

                    return profile;
                }
            }
        }



    }
}
