using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile profile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        UserProfile GetUserByIdWithPosts(int id);
        void Update(UserProfile profile);
    }
}