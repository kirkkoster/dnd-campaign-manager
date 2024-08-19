using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dnd_campaign_manager.Server.Migrations
{
    /// <inheritdoc />
    public partial class campaigns3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CampaignsId",
                table: "Session",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Campaign",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campaign", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Session_CampaignsId",
                table: "Session",
                column: "CampaignsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Session_Campaign_CampaignsId",
                table: "Session",
                column: "CampaignsId",
                principalTable: "Campaign",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Session_Campaign_CampaignsId",
                table: "Session");

            migrationBuilder.DropTable(
                name: "Campaign");

            migrationBuilder.DropIndex(
                name: "IX_Session_CampaignsId",
                table: "Session");

            migrationBuilder.DropColumn(
                name: "CampaignsId",
                table: "Session");
        }
    }
}
