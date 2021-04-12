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







    }
}
